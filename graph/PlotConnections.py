#!/usr/bin/python
import json,shelve
import matplotlib.pyplot as plt
from EdsImpact import consumedPower, ratio, receivedPoints, impact
from DataProcessing import nodes, nEG, nER 

font = {'family' : 'monospace',
        #'weight' : 'bold',
        'size'   : 20}

titleFont = {'family' : 'monospace',
        #'weight' : 'bold',
        'size'   : 24}

inDegree = []
outDegree = []
RP = []
totalPoint = []
ratioList=[]

node_impact_conn=[]
for i in nodes:
    if ( (not(nEG[str(i)] <= 1.0)) and (not(nER[str(i)] <= 1.0)) and impact[str(i)] > 0.0 ):
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


#plt.title('Relation between Total Received Points and Total EDS Impact',titleFont)
#plt.plot(node_received, node_impact, 'bs' )
#plt.xlabel('Total Received Points',font )
#plt.ylabel('Total endorsement impact',font )
#plt.show()

plt.title('Relation between Ratio and Total Endorsement Impact',titleFont)
plt.plot(node_ratio, node_impact, 'bs')
plt.xlabel('Ratio',font )
plt.ylabel('Total Endorsement Impact',font )
plt.show()

# pick nodes with max impact, average impact and min impact
max_impact_node =[]
for i in node_impact_conn:
    if (impact[str(i)] >= 120.0 ):
        max_impact_node.append(i)

average_impact_node=[]
for i in node_impact_conn:
    if (impact[str(i)] >= 85.0 and impact[str(i)] < 90 ):
        average_impact_node.append(i)

min_impact_node=[]
for i in node_impact_conn:
    if (impact[str(i)] >=0.0 and impact[str(i)] < 5.0 ):
        min_impact_node.append(i)

maxImpactMaxRatio=0.0
maxImpactMinRatio=1.0
for i in max_impact_node:
    if (ratio[str(i)] > maxImpactMaxRatio ):
        maxImpactMaxRatio = ratio[str(i) ]
        maxImpactMaxRatioNode = i
    if (ratio[str(i)] < maxImpactMinRatio ):
        maxImpactMinRatio = ratio[str(i) ]
        maxImpactMinRatioNode = i

averageImpactMaxRatio=0.0
averageImpactMinRatio=1.0
for i in average_impact_node:
    if (ratio[str(i)] > averageImpactMaxRatio ):
        averageImpactMaxRatio = ratio[str(i) ]
        averageImpactMaxRatioNode = i
    if (ratio[str(i)] < averageImpactMinRatio ):
        averageImpactMinRatio = ratio[str(i) ]
        averageImpactMinRatioNode = i

minImpactMaxRatio=0.0
minImpactMinRatio=1.0
for i in min_impact_node:
    if (ratio[str(i)] > minImpactMaxRatio ):
        minImpactMaxRatio = ratio[str(i) ]
        minImpactMaxRatioNode = i
    if (ratio[str(i)] < minImpactMinRatio ):
        minImpactMinRatio = ratio[str(i) ]
        minImpactMinRatioNode = i

# All nodes with impact above zero, i.e. 497 nodes
# cases: Max impact,  min ratio
# case 2: Max Impact , Max ratio
#case 3: Min impact, min ratio
#case 4: Min impact, max ratio








