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
for i in range(0,len(uniqueSource) ):
    receivedPoints[uniqueSource[i]] = 0
    for j in hasReceivedFrom[uniqueSource[i] ]:
        receivedPoints[uniqueSource[i]] = receivedPoints[uniqueSource[i]] + usedPower[j]
    
#ratio 
ratio = {}
for i in range(0, len(uniqueSource)):
    minVal = min(nEG[uniqueSource[i ] ], nER[uniqueSource[i] ] )
    maxVal = max(nEG[uniqueSource[i ] ], nER[uniqueSource[i] ] )
    ratio[uniqueSource[i]] = minVal/maxVal 
impact = {}
for i in range(0, len(uniqueSource) ): 
    tempratio = ratio[uniqueSource[i] ]
    tempusedPower = usedPower[uniqueSource[i ] ]
    tempreceivedPoints = receivedPoints[uniqueSource[i ] ]
    impact[uniqueSource[i] ] = tempratio * tempusedPower * tempreceivedPoints 

print (hasReceivedFrom['1'] )
print (len(hasReceivedFrom ) )
