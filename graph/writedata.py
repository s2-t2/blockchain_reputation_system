#!/usr/bin/python
from DataProcessing import nodes,source
from EdsImpact import impact,consumedPower,receivedPoints,ratio, nEG, nER 

nodeAboveZeroImpact=[]
node_connections_aboveOne=[]
node_conn_impact=[]

nEG_one_five=[]
nEG_five_ten=[]
nEG_ten_twenty=[]
nEG_twenty_thirty=[]
nEG_thirty_forty=[]
nEG_forty_fifty=[]
nEG_fifty_sixty=[]
nEG_sixty_seventy=[]
nEG_seventy_eighty=[]
nEG_eighty_ninety=[]
nEG_ninety_hundred=[]
nEG_above_hundred=[]

nER_one_five=[]
nER_five_ten=[]
nER_ten_twenty=[]
nER_twenty_thirty=[]
nER_thirty_forty=[]
nER_forty_fifty=[]
nER_fifty_sixty=[]
nER_sixty_seventy=[]
nER_seventy_eighty=[]
nER_eighty_ninety=[]
nER_ninety_hundred=[]
nER_above_hundred=[]

for i in nodes:
    if (impact [str(i)] > 0.0 ):
        nodeAboveZeroImpact.append(i)
    if (nEG[ str(i)]> 1.0 and nER[str(i)]>1.0) :
        node_connections_aboveOne.append(i)
for i in node_connections_aboveOne:
    if (impact[str(i)] > 0.0 ):
        node_conn_impact.append(i)

for i in nodeAboveZeroImpact:
    if (nEG[str(i)] > 1.0 and nEG[str(i)] <=5.0 ) :
        nEG_one_five.append(i)
    if (nEG[str(i)] > 5.0  and nEG[str(i)] <=10.0):
        nEG_five_ten.append(i)
    if (nEG[str(i)] > 10.0  and nEG[str(i)] <=20.0):
        nEG_ten_twenty.append(i)
    if (nEG[str(i)] > 20.0  and nEG[str(i)] <=30.0):
        nEG_twenty_thirty.append(i)
    if (nEG[str(i)] > 30.0  and nEG[str(i)] <=40.0):
        nEG_thirty_forty.append(i)
    if (nEG[str(i)] > 40.0  and nEG[str(i)] <=50.0):
        nEG_forty_fifty.append(i)
    if (nEG[str(i)] > 50.0  and nEG[str(i)] <=60.0):
        nEG_fifty_sixty.append(i)
    if (nEG[str(i)] > 60.0  and nEG[str(i)] <=70.0):
        nEG_sixty_seventy.append(i)
    if (nEG[str(i)] > 70.0  and nEG[str(i)] <=80.0):
        nEG_seventy_eighty.append(i)
    if (nEG[str(i)] > 80.0  and nEG[str(i)] <=90.0):
        nEG_eighty_ninety.append(i)
    if (nEG[str(i)] > 90.0  and nEG[str(i)] <=100.0):
        nEG_ninety_hundred.append(i)
    if (nEG[str(i)] > 100.0 ):
        nEG_above_hundred.append(i)

    if (nER[str(i)] > 1.0 and nER[str(i)] <=5.0 ) :
        nER_one_five.append(i)
    if (nER[str(i)] > 5.0  and nER[str(i)] <=10.0):
        nER_five_ten.append(i)
    if (nER[str(i)] > 10.0  and nER[str(i)] <=20.0):
        nER_ten_twenty.append(i)
    if (nER[str(i)] > 20.0  and nER[str(i)] <=30.0):
        nER_twenty_thirty.append(i)
    if (nER[str(i)] > 30.0  and nER[str(i)] <=40.0):
        nER_thirty_forty.append(i)
    if (nER[str(i)] > 40.0  and nER[str(i)] <=50.0):
        nER_forty_fifty.append(i)
    if (nER[str(i)] > 50.0  and nER[str(i)] <=60.0):
        nER_fifty_sixty.append(i)
    if (nER[str(i)] > 60.0  and nER[str(i)] <=70.0):
        nER_sixty_seventy.append(i)
    if (nER[str(i)] > 70.0  and nER[str(i)] <=80.0):
        nER_seventy_eighty.append(i)
    if (nER[str(i)] > 80.0  and nER[str(i)] <=90.0):
        nER_eighty_ninety.append(i)
    if (nER[str(i)] > 90.0  and nER[str(i)] <=100.0):
        nER_ninety_hundred.append(i)
    if (nER[str(i)] > 100.0 ):
        nER_above_hundred.append(i)
maxImpact = 0
for i in nodes:
    if (impact[str(i)] > maxImpact ):
        maxImpact = impact[str(i)]
        maxImpactNode = i

maxReceivedPoint =0
for i in nodes:
    if (receivedPoints[str(i)] > maxReceivedPoint ):
        if (receivedPoints [str(i)] > maxReceivedPoint ):
            maxReceivedPoint = receivedPoints[str(i) ]
            maxReceivedNode = i
maxRatio=0
for i in nodes:
    if (ratio[str(i)] > maxRatio ):
        maxRatio = ratio[str(i)]
        maxRatioNode = i
maxConsumablePoint=0
for i in nodes:
    if (consumedPower[str(i)]):
        maxConsumablePoint = consumedPower[str(i)]
        maxConsumedNode = i

file = open("nodesinfo.txt","w")

file.write("Positive edges with ratings above 2 \n\n")
file.write("total nodes: " + str(len(nodes)) + "\n" )
file.write("total edges: " + str(len(source ) ) + "\n")

file.write("Maximum Impact value " + str(maxImpact) + "of node " + str(maxImpactNode) + "\n" )
file.write("Maximum Received Points " + str(maxReceivedPoint) + " of node " + str(maxReceivedNode) +"\n" )
file.write("Maximum Ratio " + str(maxRatio) + "of node" + str(maxRatioNode) + "\n" )
file.write("Maximum ConsumedPoints " + str(maxConsumablePoint) + " of node " + str(maxConsumedNode) + "\n" )

file.write("No. of nodes with Impact above zero : " + str(len(nodeAboveZeroImpact)) + "\n")
file.write("No. of nodes with impact above zero among nodes having more than one connections " + str(len(node_conn_impact) ) + "\n\n" )
file.write("No. of nodes with impact above zero and nEG :\n") 
file.write("between 1 and 5: " + str(len(nEG_one_five)) + "\n" )
file.write("between 5 and 10: " + str(len(nEG_five_ten))+ "\n"  )
file.write("between 10 and 20: " + str(len(nEG_ten_twenty))+ "\n"  )
file.write("between 20 and 30: " + str(len(nEG_twenty_thirty)) + "\n" )
file.write("between 30 and 40: " + str(len(nEG_thirty_forty)) + "\n" )
file.write("between 40 and 50: " + str(len(nEG_forty_fifty)) + "\n" )
file.write("between 50 and 60: " + str(len(nEG_fifty_sixty)) + "\n" )
file.write("between 60 and 70: " + str(len(nEG_sixty_seventy)) + "\n" )
file.write("between 70 and 80: " + str(len(nEG_seventy_eighty)) + "\n" )
file.write("between 80 and 90: " + str(len(nEG_eighty_ninety)) + "\n" )
file.write("between 90 and 100: " + str(len(nEG_ninety_hundred)) + "\n" )
file.write("above 100: " + str(len(nEG_above_hundred)) + "\n\n" )


file.write("No. of nodes with impact above zero and nER :\n") 
file.write("between 1 and 5: " + str(len(nER_one_five)) + "\n" )
file.write("between 5 and 10: " + str(len(nER_five_ten))+ "\n"  )
file.write("between 10 and 20: " + str(len(nER_ten_twenty))+ "\n"  )
file.write("between 20 and 30: " + str(len(nER_twenty_thirty)) + "\n" )
file.write("between 30 and 40: " + str(len(nER_thirty_forty)) + "\n" )
file.write("between 40 and 50: " + str(len(nER_forty_fifty)) + "\n" )
file.write("between 50 and 60: " + str(len(nER_fifty_sixty)) + "\n" )
file.write("between 60 and 70: " + str(len(nER_sixty_seventy)) + "\n" )
file.write("between 70 and 80: " + str(len(nER_seventy_eighty)) + "\n" )
file.write("between 80 and 90: " + str(len(nER_eighty_ninety)) + "\n" )
file.write("between 90 and 100: " + str(len(nER_ninety_hundred)) + "\n" )
file.write("above 100: " + str(len(nER_above_hundred)) + "\n" )





