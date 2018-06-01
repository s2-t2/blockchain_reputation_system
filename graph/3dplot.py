#!/usr/bin/python
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import numpy as np

from EdsImpact import consumedPower, ratio, receivedPoints, impact
from DataProcessing import nodes, nEG, nER 

fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

n = 100


#xs=[1,2,3,4,5]
#ys=[3,4,5,6,7]
#zs=[1,2,3,4,5]
node_impact_conn=[]
for i in nodes:
    if (nEG[str(i)] > 1.0 and nER[str(i)] > 1.0 and impact[str(i)] > 0.0 ):
        node_impact_conn.append(i)

node_impact = []
node_ratio=[]
node_given=[]
node_received=[]
for i in node_impact_conn:
    node_impact.append(impact[str(i)])
    node_given.append(nEG[str(i) ] )
    node_received.append(nER[str(i) ] )

'''
xs=[]
ys=[]
zs=[]

for i in degreeIncoming.values() :
    xs.append(0 if i is None else i)
for i in degreeOutgoing.values():
    ys.append(0 if i is None else i)
for i in impact :
    zs.append(impact[i])
'''
ax.scatter(node_given,node_received,node_impact, c='r', marker='o')

#ax.scatter(xs,ys,zs,c=None);

ax.set_xlabel('Incoming Connections')
ax.set_ylabel('Outgoing Connections')
ax.set_zlabel('Endorsement Impact')

plt.show()
