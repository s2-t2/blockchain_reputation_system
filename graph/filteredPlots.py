#!/usr/bin/python
import matplotlib.pyplot as plt

from EdsImpact import impact,consumedPower,receivedPoints,ratio, nEG, nER 

impactKeysDict=[]
for k,v in impact.items():
    if (v > 0.0 ):
        impactKeysDict.append(k)

impactDict=[]
for i in impactKeysDict :
    impactDict.append(impact[str(i)])

nEGDict=[]
for i in impactKeysDict :
    nEGDict.append(nEG[str(i)])

nERDict=[]
for i in impactKeysDict :
    nERDict.append(nER[str(i)] )

RPDict = []
for i in impactKeysDict:
    RPDict.append(receivedPoints[str(i)] )

CPDict=[]
for i in impactKeysDict:
    CPDict.append(consumedPower[str(i)])

ratioDict =[]
for i in impactKeysDict:
    ratioDict.append(ratio[str(i)])

#nodes that have nER > 5
list1=['1','2','20','4','5','7','9','13','94','177','28' ]


font = {'family':'monospace',
        #'weight':'bold',
        'size': 18 }

plt.title('Relation between given and received' )
plt.plot(ratioDict, impactDict,'o' )
plt.xlabel('ratio', font )
plt.ylabel('total impact',font )
plt.show()
