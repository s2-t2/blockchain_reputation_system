#!/usr/bin/python

import json,jsonlines


with open('./smalluser.json') as json_file:
    data = json.load(json_file)
    #for i in range(0,len(data) ):
        #print (data[i]['user_id'])
        #print ("friends of " + data[i]['name'] +  "with user id" + data[i]['user_id']  )
        #print (data[i]['friends'])



