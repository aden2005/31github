# # class Animal:
# #     def __init__ (self):
# #         print("start")
# #     def eat (self):
# #         print("eat")
# #     def move (self):
# #         print("move")
        
        
# # a=Animal()
# # a.eat()
# # a.move()


# # class Dog (Animal):
# #     def __init__(self):
# #         print("start Dog")
# #     def run(self):
# #         print("dog is running")
        
# # d=Dog()
# # d.eat()
# # d.move()
# # d.run()



  
# class Human:
#     def __int__(self):
#         print("start")
#     def feel (self):
#         print("human has a feelings")
#     def think (self):
#         print("human")
    
# h=Human()
# h.feel()
# h.think()



# class Nation(Human):
#     def __init__self(self):
# #         print ("start Nation")
# #     def country(self):
# #         print("Nation Kyrgyz")
        
# # n=Nation()
# # n.feel()
# # n.think()
# # n.country()
    
    
# # class Myclass:
# #     def publick_method(self):
# #         print("Publick method")
        
        
# # class Myclass:
# #     def __private_method(self):
# #         print("Private method")



# class Mainclass:
#     __private_variable = 2021;

#     def __private_method(self):
#         print("Это приватный метод")

#     def insideclass(self):
# #         print("Приватная переменная:", Mainclass.__private_variable)
# #         self.__private_method()

# # foo = Mainclass()
# # foo.insideclass()





# # class Maincraft:
# #     foo = Mainclass()
# #     foo.insideclass()



# # class Student:
# #    def __init__(self, name, age):
# #       self.name = name
# #       self.age = age
    
# #    def display(self):
# #       print("Name:", self.name)
# #       print("Age:", self.age)

# # s = Student("John", 20)
# # s.display()



# class Person:
#    def __init__(self, name, age):
#       self._name = name
#       self._age = age
    
#    def _display(self):
#       print("Name:", self._name)
#       print("Age:", self._age)

# class Student(Person):
#    def __init__(self, name, age, roll_number):
#       super().__init__(name, age)
#       self._roll_number = roll_number
    
#    def display(self):
#       self._display()
#       print("Roll Number:", self._roll_number)

# s = Student("John", 20, 123)
# s.display()



        
# class Noutbook():
#     def intro (self):
#         print("the are many types.")
#     def type (self):
#         print("can be for gaming or for working")
# class macbook(Noutbook):
#     def type (self):
#         print("macbook the best noutbook for work")
# class asus(Noutbook):
#     def type(self):
#         print("asus noutbook good for gaming")

# obj_noutbook = Noutbook()
# obj_mck = macbook()  
# obj_asu = asus()

# obj_noutbook.intro()
# obj_noutbook.type()

# obj_mck.intro()
# obj_mck.type()

# obj_asu.intro()
# obj_asu.type()     
        
        

# import unittest

# import requests


# class TestStringMethods(unittest.TestCase):
#     def test_api(self):
#         api_url = "https://m.youtube.com/?hl=RU"
#         responce = requests.get(api_url)
#         self.assertEqual(responce.status_code,200)
       
# if __name__ =='__main__':
#     unittest.main()


# import instaloader

# L=instaloader.Instaloader()

# username="0qp0db0"
# password="4645ar1213"

# L.login(username, password)
# print("reached")
# profile = instaloader.Profile.from_username(L.context, "0qp0db0")  



from instagrapi import Client

client = Client()
client.login( "ad.en3120","Argen2005")
u = client.user_following(1835418720, 2)
print(u)
       
