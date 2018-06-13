#!/usr/bin/python

#Participants = [A,B,C,D,E,F,G]

outGoingA = ['C','E']
outGoingC = ['D','A','B']
outGoingE = ['F','G','D']

honest  = 'false'

# check if A is honest node
for i in outGoingA :
    for j in outGoingC:
        if j not in outGoingA:
            honest = 'true'

print (honest)



