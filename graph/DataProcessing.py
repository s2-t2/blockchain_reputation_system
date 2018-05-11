#!/usr/bin/python

import csv

from pandas import read_csv

#df = read_csv('soc-sign-bitcoinalpha.csv')
#df.columns=['source','target','rating','time']
#df.to_csv('soc-sign-bitcoinalpha-label.csv')

myDict = {}
source = []
target = []

nER = {}
with open('./testfile.csv', newline='' ) as File : 
    #reader = csv.reader(File)
    reader = csv.DictReader(File)
    for row in reader:
        source.append(row['source'] )
        target.append(row['target'])
        #print (row['source'], row['target'])
        #key = row['source']
        #value = row['target']

        #myDict[key].append(value)


uniqueSource = []
uniqueTarget = []

for i in source : 
    if i not in uniqueSource :
        uniqueSource.append(i)
for i in target: 
    if i not in uniqueTarget:
        uniqueTarget.append(i)

nER =  ({key: None for key in uniqueSource } )
#nEG = {}
for i in range(0,len(source)) :
    counter = 0;
    for j in range(0, len(target) ):
        if source[i] in target[j] :
            counter = counter + 1
            #nEG = nEG + {source[i]: target[j] }
            nER[(source[i])] = counter;

nEG = ({key: None for key in uniqueTarget } )
for i in range(0,len(target)) :
    counter =0 
    for j in range(0, len(source ) ):
        if target[i] in source[j] :
            counter = counter + 1;
            nEG[target[i] ] = counter

connectionsFile = open("connections.txt","w" )
print ("nEG", file=connectionsFile)
print (nEG, file=connectionsFile )
#print ("nER" )
print ("nER", file=connectionsFile )
print (nER, file=connectionsFile )

#print ("length of source" );
#print (len(uniqueSource) )
#print ("length of target" )
#print (len(uniqueTarget ) )
#print (source)
#print (target)
#print (uniqueSource)
#print (uniqueTarget)

#print (nER)
#print (nEG)
