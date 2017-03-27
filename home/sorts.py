import json

class Data:
    location = ""
    amount = -1
    category = ""
    month = -1
    year = -1
    def __init__(self, arg):
        super(self).__init__()
        self.arg = arg
    def __init__(self,location, amount, category, month, year):
        self.location = location
        self.amount = amount
        self.category = category
        self.month = month
        self.year = year

def add(category, state):
   sum = 0
   with open('test.json') as json_data:
      d = json.load(json_data)
      for i in range(len(d["rows"])):
         d["rows"][i] = d["rows"][i]["data"][:5]
         if (d["rows"][i][0] == state and d["rows"][i][2]==category):
            sum+=float(d["rows"][i][1])
   return sum + .00

def main(state):
   return add("Food", state) + add("General", state) + add("Clothing", state) + add("Cars", state) + add("Electronics", state) + add("Furniture", state) + add("Rec", state)
def total():
   return main("VA") + main("MD") + main("NY")
def perc(state):
   return main(state)/total() *100
   
   
#print add("Cars", "NY")
print main("VA")
#print total()
#print perc("VA")


