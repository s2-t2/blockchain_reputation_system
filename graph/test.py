#!/usr/bin/python

import matplotlib.pyplot as plt

inc = [2,3,2,5,7]
outg = [3,2,5,8,2]
imp = [2,2,3,7,1 ]

plt.plot(inc,outg,'ro', imp,'bs' )
plt.xlabel('inc and imp' )
plt.ylabel('outg and imp' )
plt.show()

