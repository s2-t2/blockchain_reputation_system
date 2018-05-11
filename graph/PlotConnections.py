#!/usr/bin/python
import json,shelve
import matplotlib.pyplot as plt
import DataProcessing
from DataProcessing import source,target,uniqueSource,uniqueTarget,nEG,nER

file = open('./test_given.txt','r' )

xAxis = []
yAxis = []

for i in nEG: 
    print (i)
    print (nEG[i])

#for i in range(0,len(uniqueSource)):
    #xAxis.append(i)

print (nEG)


'''
d = {}
for line in file:
    items = line.split("," )
    a = items[0]
    b = items[1]
    d[a] = b
'''
