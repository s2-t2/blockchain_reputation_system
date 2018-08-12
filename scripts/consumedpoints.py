#!/usr/bin/python
import matplotlib.pyplot as plt

font = {'family' : 'monospace',
        #'weight' : 'bold',
        'size'   : 18}


titleFont = {'family' : 'monospace',
        'weight' : 'bold',
        'size'   : 23}


xAxis = [];
yAxis = [];
for i in range(1,51) :
    xAxis.append(i);

for j in range(1,51):
    temp = 1/j;
    yAxis.append(temp);

plt.plot([xAxis], [yAxis], 'bo', linewidth=0.5 )
plt.ylabel('consumedPoints', font);
plt.xlabel('number of connections',font);
plt.title('depletion of consumable points',titleFont );
plt.show()

