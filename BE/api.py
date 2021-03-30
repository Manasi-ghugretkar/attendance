from flask import Flask,jsonify,request
import mysql.connector as mysql
from flask_cors import CORS,cross_origin


try:
    conn = mysql.connect(
      host="localhost",
      user="root",
      password="",
      database="attendence_mgt"
)

    curs=conn.cursor(buffered=True)


    app = Flask(__name__)
    CORS(app)
    app.config['CORS_HEADERS']='Content-Type'

    curs.execute("CREATE TABLE IF NOT EXISTS ADMIN(ID INTEGER PRIMARY KEY AUTO_INCREMENT,NAME VARCHAR(20) NOT NULL,PASSWORD VARCHAR(20) NOT NULL,USER_TYPE VARCHAR(20) NOT NULL)")
    curs.execute("CREATE TABLE IF NOT EXISTS TEACHER(ID INTEGER PRIMARY KEY AUTO_INCREMENT,NAME VARCHAR(20) NOT NULL,EMAIL VARCHAR(20) NOT NULL,SUBJECT VARCHAR(20),PHONENO VARCHAR(10) NOT NULL,BRANCH VARCHAR(20) NOT NULL,PASSWORD VARCHAR(20) NOT NULL)")

    @app.route('/registerStudent',methods=['POST'])
    def registerStudenty():
       data=request.get_json()
       print(data)
       name=data['name']
       usn=data['usn']
       sem=data['sem']
       division=data['division']
       branch=data['branch']
       phoneno=data['phoneno']
       email=data['email']
       password=data['password']
       bachYear=data['batchYear']
    

       sqlQuery="insert into student(name,usn,sem,division,branch,phoneno,email,password,bachYear)values(%s,%s,%s,%s,%s,%s,%s,%s,%s)"
       values=(name,usn,sem,division,branch,phoneno,email,password,bachYear)
       curs.execute(sqlQuery,values)

       conn.commit()
       return({"message":"success"})




    @app.route('/registerTeacher', methods=['POST'])
    def registerTeacher():
        data=request.get_json()
        print(data)
        name=data['name']
        email=data['email']
        phoneno=data['phoneno']
        branch=data['branch']
        subject=data['subject']
        password=data['password']

        slquery="insert into teacher(name,email,phoneno,branch,subject,password) values(%s,%s,%s,%s,%s,%s)"
        values=(name,email,phoneno,branch,subject,password)
        curs.execute(slquery,values)

        conn.commit()
        return({'message':'Success'})



    @app.route('/login', methods=['POST'])     #check wheather the user is valid or not 
    def method_name():
        data=request.get_json()
        print(data)
        user=request.get_json()['name']
        password=request.get_json()['password']
        userType=request.get_json()['userType']
        #print(user,password,userType)
        if userType=='admin':
            sqlQuery="select * from admin where name =%s and password=%s"
            values=(user,password)
            curs.execute(sqlQuery,values)
            if(curs.rowcount>0):
                return jsonify(({"message":"valid user", "status":1}))
            else:
                return jsonify(({"message":"Invalid user or password","status":0}))
        elif userType=="student":
            sqlQuery="select * from student where name=%s and password=%s"
            values=(user,password)
            curs.execute(sqlQuery,values) 
            if (curs.rowcount>0):
                return jsonify(({"message":"valid user","status":1}))
            else:
                return jsonify(({"message":"Invalid user or password","status":0}))
        else:
            sqlQuery="select * from teacher where name =%s and password=%s"
            values=(user,password)
            curs.execute(sqlQuery,values)
            if (curs.rowcount>0):
                return jsonify(({"message":"valid user","status":1}))
            else:
                return jsonify(({"message":"Invalid user or password","status":0}))




        return jsonify({"message":"sucess"})



    
    
    



    if __name__ == '__main__':
        app.run(debug=True,port=5000)



except Exception as e:
    print("error connecting to database,please check if mysql is on",e)

