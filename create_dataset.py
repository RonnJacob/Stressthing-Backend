import random
from faker import Faker

import datetime

fake = Faker()
start_date = datetime.date(year=2019, month=9, day=1)


from randomtimestamp import randomtimestamp

f = open("record.txt", "w")
list1 = ["Biking" , "Running", "Walking", "Rest", "Swimming"]

for i in range(1, 100):
    f.write("0" + ", " + str(fake.date_between(start_date=start_date, end_date='+1m')) + ", " + str(random.choice(list1) ) + ", " + str(random.randint(60, 100)) + ", " + str(random.randint(100, 130)))
    f.write("\n")