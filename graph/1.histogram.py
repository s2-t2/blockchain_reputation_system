#!/usr/bin/python

import matplotlib.pyplot as plt

font = {'family' : 'monospace',
        #'weight' : 'bold',
        'size'   : 20}


titleFont = {'family' : 'monospace',
        'weight' : 'bold',
        'size'   : 24}


nodes = [419,51,5,10,2,1,1,0,1,0,2,0,1,3,0,1 ] 
impact = ['0-5','5-10','10-15','15-20','20-25','25-30','30-35','35-65','65-70','70-85','85-90','90-115','115-120','120-125', '125-150', '150-155']

plt.bar(impact, nodes )

plt.xlabel('Range of TEI values', font)
plt.ylabel('Number of nodes', font)
plt.title('No. of nodes and corresponding impact ranges', titleFont)
plt.legend()
plt.show()

