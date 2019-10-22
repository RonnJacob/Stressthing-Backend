import json
import requests
import random
from faker import Faker

import datetime

fake = Faker()
start_date = datetime.date(year=2019, month=9, day=1)


from randomtimestamp import randomtimestamp

f = open("record.txt", "w")
list1 = ["Biking" , "Running", "Walking", "Rest", "Swimming"]

#for i in range(1, 100):
#    f.write("0" + ", " + str(fake.date_between(start_date=start_date, end_date='+1m')) + ", " + str(random.choice(list1) ) + ", " + str(random.randint(60, 100)) + ", " + str(random.randint(100, 130)))
#    f.write("\n")


#print(fake.date_between(start_date=start_date, end_date='+1m'))
for i in range(1,20):
    fitness_data = {}
    fitness_data['timestamp']=str(fake.date_between(start_date=start_date, end_date='+1m'))
    fitness_data['activity']=str(random.choice(list1))
    fitness_data['currentHeartRate']=str(random.randint(100,130))
    fitness_data['restingHeartRate']=str(random.randint(60,100))
    fitness_data['ownedBy']={'_id':'5dab481f2d2c6867c9b4221d'}
    json_fitness=json.dumps(fitness_data)

    print(json_fitness)
    url='http://localhost:4200/api/fitness'
    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    r = requests.post(url, json_fitness, headers=headers)
