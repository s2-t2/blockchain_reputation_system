#!/usr/bin/python
import csv
from pandas import read_csv

myDict = {}
source = []
target = []
nodes = []

nER = {}
'''
myData =[["source","target","rating","time"]]

with open('./soc-sign-bitcoinalpha-label.csv', newline='' ) as File : 
    reader = csv.DictReader(File)
    for row in reader:
        if int(row['rating']) > 1 :
            myData.append([row['source'],row['target'],row['rating'],row['time']])

myFile = open('positive.csv','w')

with myFile:
    writer = csv.writer(myFile)
    writer.writerows(myData)
print ("writing complete!!" )
'''
with open('./positive_morethan_2.csv', newline='' ) as File : 
    #reader = csv.reader(File)
    reader = csv.DictReader(File)
    for row in reader:
        source.append(row['source'] )
        target.append(row['target'])
        if (row['source']) not in nodes :
            nodes.append(row['source' ])
        if (row['target']) not in nodes :
            nodes.append(row['target'])

nEG = ({key: None for key in nodes } )
for i in nodes:
    counter = 0;
    for j in source:
        if (str(i) == str(j) ):
            counter = counter + 1;
    nEG[str(i)] =counter;

nER = ({key: None for key in nodes } )
for i in nodes:
    counter = 0;
    for j in target :
        if (str(i) == str(j) ):
            counter = counter + 1;
    nER[str(i)] = counter;

