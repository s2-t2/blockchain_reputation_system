#!/usr/bin/python
import json,shelve
import matplotlib.pyplot as plt
import DataProcessing
from DataProcessing import source,target,uniqueSource,uniqueTarget,nEG,nER
import EdsImpact
from EdsImpact import usedPower, ratio, impact

xAxis =[]
yAxis =[]

for i in impact :
    if (i != 0 ):
        xAxis.append(i)
for i in ratio :
    if (i != 0 ):
        yAxis.append(i)


plt.plot(xAxis,yAxis)
plt.xlabel('Total Endorsement Impact' )
#plt.axis([0,1,0,1])
plt.ylabel('ratio of inDegree and outDegree' )
plt.show()

