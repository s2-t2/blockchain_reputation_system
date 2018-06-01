import csv
from pandas import read_csv

myDict = {}
source = []
target = []
nodes = []

nER = {}

myData =[["source","target","rating","time"]]

with open('./soc-sign-bitcoinalpha-label.csv', newline='' ) as File : 
    reader = csv.DictReader(File)
    for row in reader:
        if int(row['rating']) > 1 :
            myData.append([row['source'],row['target'],row['rating'],row['time']])

myFile = open('positive_morethan_1.csv','w')

with myFile:
    writer = csv.writer(myFile)
    writer.writerows(myData)
print ("writing complete!!" )


