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

#plt.title('Relation between ratio and total impact')
#plt.plot(node_ratio, node_impact, 'bs' )
#plt.xlabel('node_ratio',font )
#plt.ylabel('Total endorsement impact',font )
#plt.show()

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

#Case 1: Max Impact, Min Ratio
case1_maxImpactMinRatio=1.0
case2_maxImpactMaxRatio=0.0
for i in node_impact_conn:
    if (ratio[str(i)] < case1_maxImpactMinRatio ):
        case1_maxImpactMinRatio = ratio[str(i)]
        case1_maxImpactMinRatioNode = i
    if (ratio[str(i)] > case2_maxImpactMaxRatio):
        case2_maxImpactMaxRatio = ratio[str(i)]
        case2_maxImpactMaxRatioNode = i
   
#Case 3 : Min Impact, Min RAtio, case 4: min impact, max ratio
case3_minImpactMinRatio=1.0
case4_minImpactMaxRatio=0.0
for i in node_impact_conn:
    if (ratio[str(i)] < case3_minImpactMinRatio ):
        case3_minImpactMinRatio = ratio[str(i)]
        case3_minImpactMinRatioNode = i
    if (ratio[str(i)] > case4_minImpactMaxRatio):
        case4_minImpactMaxRatio = ratio[str(i)]
        case4_minImpactMaxRatioNode = i
















