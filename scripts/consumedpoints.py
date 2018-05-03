#!/usr/bin/python
import matplotlib.pyplot as plt

xAxis = [];
yAxis = [];
for i in range(1,51) :
    xAxis.append(i);

for j in range(1,51):
    temp = 1/j;
    yAxis.append(temp);

plt.plot([xAxis], [yAxis], 'bo', linewidth=0.5 )
plt.ylabel('consumedPoints');
plt.xlabel('number of connections');
plt.title('depletion of consumable points for one  ' );
plt.show()

