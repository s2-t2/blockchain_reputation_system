#!/usr/bin/py

nEG=[];
nER=[];
ratio=[];
usedPower=[];
sumRE=[];

#Assuming that a node has received from all honest nodes
#RE = 1/nER * nER 

#For the ratio, assuming stable nER of 300, nEG can be 300/300, 299/300, 298/300 and so on....

for i in range(1,11):
    for j in range(1,11):
        nEG.append(i);
        nER.append(j);

#get ratio 
def ratio(nEG,nER) :
    ratio = nEG/nER;
    return ratio;

#get usedPoewr
def usedPower(nEG) :
    usedPower  = 1/nEG;
    return usedPower;

#Summation of RE 
def sumRE(nER) :
    sumRE = 1/nER * nER;
    return sumRE;
    #for  i in range(0, len(usedPower) :
            #sumRE = usedPower( )
def totalScore(nEG,nER ) :
    ratio = ratio(nEG,nER );
    usedPower = usedPower(nEG);
    sumRE = sumRE(nER);
    score = ratio * usedPower * sumRE;
    return score;

print (len(nEG)  );

print (len(nER)  );




