#!/usr/bin/python
import csv
from pandas import read_csv

myDict = {}
source = []
target = []

nER = {}

myData =[["source","target","rating","time"]]

with open('./soc-sign-bitcoinalpha-label.csv', newline='' ) as File : 
    reader = csv.DictReader(File)
    for row in reader:
        if int(row['rating']) > 1:
            myData.append([row['source'],row['target'],row['rating'],row['time']])

myFile = open('positive.csv','w')

with myFile:
    writer = csv.writer(myFile)
    writer.writerows(myData)
print ("writing complete!!" )

with open('./positive.csv', newline='' ) as File : 
    #reader = csv.reader(File)
    reader = csv.DictReader(File)
    for row in reader:
        source.append(row['source'] )
        target.append(row['target'])

uniqueSource = []
uniqueTarget = []
allUniqueNodes =[]
for i in source : 
    if i not in allUniqueNodes :
        allUniqueNodes.append(i)
for i in target:
    if i not in allUniqueNodes:
        allUniqueNodes.append(i)
for i in source:
    if i not in uniqueSource:
        uniqueSource.append(i)
for i in target:
    if i not in uniqueTarget:
        uniqueTarget.append(i)

nER =  ({key: None for key in uniqueTarget } )
for i in range(0, len(allUniqueNodes)):
    counter = 0;
    for j in range(0,len(target)):
        if allUniqueNodes[i] in target[j]:
            counter = counter + 1;
            nER[target[j]] = counter;

nEG = ({key: None for key in uniqueSource } )
for i in range(0, len(allUniqueNodes ) ):
    counter =0;
    for j in range(0, len(source)):
        if allUniqueNodes[i] in source[j]:
            counter = counter +1;
            nEG[source[j]] = counter

degreeOutgoing =({key: None for key in allUniqueNodes})
for i in range(0, len(allUniqueNodes ) ):
    counter = 0;
    for j in range(0, len(source ) ):
        if allUniqueNodes[i] in source[j]:
            counter = counter + 1;
            degreeOutgoing[source[j] ]=counter

degreeIncoming =  ({key: None for key in allUniqueNodes } )
for i in range(0, len(allUniqueNodes)):
    counter = 0;
    for j in range(0,len(target)):
        if allUniqueNodes[i] in target[j]:
            counter = counter + 1;
            degreeIncoming[target[j]] = counter;


givenFile = open("test_given.txt","w" )
#print ("nEG", file=givenFile)
receivedFile = open("test_received.txt","w")
#print ("nER", file=receivedFile )

