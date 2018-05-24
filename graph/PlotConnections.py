#!/usr/bin/python
import json,shelve
import matplotlib.pyplot as plt
import EdsImpact
from EdsImpact import usedPower, ratio, impact,receivedPoints
from DataProcessing import allUniqueNodes, degreeOutgoing, degreeIncoming 

xAxis =[]
yAxis =[]

for i in allUniqueNodes :
    if (i not in usedPower.keys() ):
        usedPower[i] = 0.0 
    if (ratio[i] != 0.0 and impact[i] !=0.0 ):
        yAxis.append(impact[i] )
        xAxis.append(ratio[i] )
print (xAxis )
print (yAxis )

'''
fig = plt.figure()
ax = fig.add_subplot(111 )
ax.plot(xAxis,yAxis, color='lightblue', linewidth=3)
plt.show()
'''


plt.plot(xAxis,yAxis,'ro' )
#plt.scatter(xAxis,yAxis )
plt.xlabel('Ratio of Indegree and Outdegree' )
#plt.axis([0,1,0,1])
plt.ylabel('Endorsement Impact' )
plt.show()

