#!/usr/bin/python

from DataProcessing import nEG, nER, uniqueSource,uniqueTarget,source,target


#usedPower , uniqueTarget, nEG
usedPower = ({key: None for key in uniqueTarget} )
for i in uniqueTarget:
    usedPower[i] = 1/nEG[i]

# Received Endorsement
hasReceivedFrom = {}
#hasReceivedFrom = ({key: None for key in uniqueSource } )
for i in range(0,len(uniqueSource)):
    sender = []
    for j in range(0, len(target)):
        if uniqueSource[i] == target[j] :
            sender.append(source[j])
            hasReceivedFrom[uniqueSource[i]] = sender 


#compute received points - sum of all usedpower of hasreceivedfrom
receivedPoints = {}

for i in range(1,3):
    print ( "'" + i + "'" );  

print (hasReceivedFrom['1'] )
print (len(hasReceivedFrom ) )
