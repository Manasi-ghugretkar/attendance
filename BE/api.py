from flask import Flask,jsonify,request
import mysql.connector as mysql
from flask_cors import CORS,cross_origin


try:
    conn = mysql.connect(
      host="localhost",
      user="root",
      password="",
      database="attendance_mgt"
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
       branch_id=data['branch_id']
       div_code=data['div_code']
       mobile=data['mobile']
       email=data['email']
       mentor_id=data['mentor_id']
    

       sqlQuery="insert into student(name,usn,sem,branch_id,div_code,mobile,email,mentor_id)values(%s,%s,%s,%d,%s,%s,%s,%s,%d)"
       values=(name,usn,sem,branch_id,div_code,mobile,email,mentor_id)
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
       
        sqlQuery="select * from users where faculty_name=%s and password=%s"
        values=(user,password)
        curs.execute(sqlQuery,values)
        if(curs.rowcount>0):
            return jsonify(({"message":"valid user", "status":1}))
        else:
            return jsonify(({"message":"Invalid user or password","status":0}))



    @app.route('./forgotpassword',methods=['post'])  
    def forgotpassword():
        data=request.get_json()
        print(data)
        username=request.get_json()['name']
        password=request.get_json()['password']
        userType=request.get_json()['userType']     

    @app.route('./otp',methods=['post'])  
    def otp():
        data=request.get_json()
        print(data)
        otp=request.get_json()['name']
        value=True


    @app.route('./newPassword',methods=['post'])
    def new_password():
        data=request.get_json()
        print(data)
        newpass=request.get_json()['new password']
        confirmpass=request.get_json()['confirm password']
        value=True

    @app.route('./TeacherDashboard',method=['post'])
    def TeacherDashboard():
        data=request.get_json()
        print(data)

    

       


        
    

    
    
    



    if __name__ == '__main__':
        app.run(debug=True,port=5000)



except Exception as e:
    print("error connecting to database,please check if mysql is on",e)

