#!/usr/bin/python
import matplotlib.pyplot as plt

font = {'family' : 'monospace',
        #'weight' : 'bold',
        'size'   : 20}


titleFont = {'family' : 'monospace',
        'weight' : 'bold',
        'size'   : 24}


xAxis = [];
yAxis = [];
for i in range(1,51) :
    xAxis.append(i);

for j in range(1,51):
    temp = 1/j;
    yAxis.append(temp);

plt.plot([xAxis], [yAxis], 'bo', linewidth=0.5 )
plt.ylabel('ConsumedPoints', font);
plt.xlabel('Number of connections',font);
plt.title('Score per Endorsee',titleFont );
plt.show()

