#!/usr/bin/python
import csv
from DataProcessing import nodes, nEG, nER,source, target 

#consumablePoints
consumedPower = ({key: None for key in nodes } )
for i in nodes: 
    if (nEG[str(i) ] is 0   ):
        val =0
    else:
        val = 1/nEG[str(i)]
    if (val >= 1 ):
        consumedPower[i] = 0;
    else :
        consumedPower[i] = val

#List of received From
receivedFrom = {}
for i in nodes : 
    listOfSenders = []
    for j in range(0,len(target ) ):
        if (i in target[j] ):
            listOfSenders.append(source[j] )
            receivedFrom[i] = listOfSenders
#Received Endorsement Points
receivedPoints = {}
for i in nodes:
    receivedPoints[i]=0
    if (i not in receivedFrom.keys() ):
        receivedPoints[i] = 0
    else:
        for j in receivedFrom[i]:
            receivedPoints[i] = receivedPoints[i] + consumedPower[j]

#ratio
ratio ={}
for i in nodes:
    given = (0 if nEG[str(i)] is 0 else nEG[str(i)])
    received = (0 if nER[str(i) ] is 0 else nER[str(i)])
    minVal = min(given,received )
    maxVal = max(given,received )
    ratio[i] = minVal/maxVal

#impact 
impact = {}
for i in nodes:
    if (nEG[str(i)] == 1 or nER[str(i)] == 1 ):
        impact[i] = 0
    else:
        impact[i] = ratio[str(i)] * receivedPoints[str(i)]
        #impact[i] = ratio[str(i)] * receivedPoints[str(i)] * consumedPower[str(i) ]

