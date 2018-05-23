#!/usr/bin/python
import csv
from DataProcessing import nEG, degreeOutgoing, degreeIncoming, allUniqueNodes, uniqueSource,uniqueTarget,source,target

#usedPower , uniqueTarget, nEG
usedPower = ({key: None for key in uniqueSource} )
for i in uniqueSource:
    if 1/nEG[i] >= 1.0 :
        usedPower[i] = 0.0;
    else:
        usedPower[i] = 1/degreeOutgoing[i];

#Received Endorsement
myDict = []
sender = ({key:None for key in uniqueTarget})
with open('./positive.csv', newline='' ) as positiveFile:
    reader = csv.DictReader(positiveFile)
    for row in reader:
        myDict.append(row )

receivedFrom = {}
for i in allUniqueNodes:
    listOfSenders = [] 
    for row in myDict:
        if (i == row['target'] ):
            listOfSenders.append(row['source'])
            receivedFrom[i] = listOfSenders

#received points
receivedPoints = {}
for i in range(0, len(uniqueTarget)):
    receivedPoints[uniqueTarget[i] ] = 0;
    for j in receivedFrom[uniqueTarget[i]]:
        receivedPoints[uniqueTarget[i] ] = receivedPoints[uniqueTarget[i]] + usedPower[j]


#ratio 
ratio = {}
for i in range(0, len(allUniqueNodes)):
    outgoing = degreeOutgoing[allUniqueNodes[i]];
    incoming = degreeIncoming[allUniqueNodes[i]];
    outVal = (0 if outgoing is None else outgoing);
    inVal = (0 if incoming is None else incoming);
    
    minVal = min(outVal, inVal)
    maxVal = max(outVal, inVal  )
    ratio[allUniqueNodes[i]] = minVal/maxVal 

#Impact

impact = {}
for i in allUniqueNodes: 
    tempratio = ratio[i]
    if (i in usedPower.keys() ):
        tempusedPower = usedPower[i]
    else:
        tempusedPower = 0.0
    if (i in receivedPoints.keys() ):
        tempreceivedPoints = receivedPoints[i]
    else :
        tempreceivedPoints = 0.0
    impact[i ] = tempratio * tempusedPower * tempreceivedPoints 

#print (hasReceivedFrom['1'] )
#print (len(hasReceivedFrom ) )

