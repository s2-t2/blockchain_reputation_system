#!/usr/bin/python
import json,shelve
import matplotlib.pyplot as plt
from EdsImpact import consumedPower, ratio, receivedPoints, impact
from DataProcessing import nodes, nEG, nER 

font = {'family' : 'monospace',
        #'weight' : 'bold',
        'size'   : 18}

inDegree = []
outDegree = []
RP = []
totalPoint = []
ratioList=[]

node_impact_conn=[]
for i in nodes:
    if (nEG[str(i)] > 1.0 and nER[str(i)] > 1.0 and impact[str(i)] > 0.0 ):
        node_impact_conn.append(i)

node_impact = []
node_ratio=[]
node_given=[]
node_received=[]
node_rp=[]
for i in node_impact_conn:
    node_impact.append(impact[str(i)])
    node_given.append(nEG[str(i) ] )
    node_received.append(nER[str(i) ] )
    node_rp.append(receivedPoints[str(i)])
    node_ratio.append(ratio[str(i)])

for i in nodes:
    inDegree.append(nEG[str(i) ] )
    outDegree.append(nER[str(i)])
    RP.append(receivedPoints[str(i)]) 
    ratioList.append(ratio[str(i) ] )
    totalPoint.append(impact[str(i)]) 

node_impact_conn=[]
for i in nodes:
    if (nEG[str(i)] > 1.0 and nER[str(i)] > 1.0 and impact[str(i)] > 0.0 ):
        node_impact_conn.append(i)

plt.title('Relation between ratio and receivedpoints')
#plt.plot(node_rp, node_impact, 'bs' )
plt.plot(node_impact, node_ratio, 'ro', node_impact, node_rp, 'bs' )
#plt.scatter(xAxis,yAxis )
plt.xlabel('received points',font )
#plt.axis([0,1,0,1])
plt.ylabel('impact',font )
plt.show()





