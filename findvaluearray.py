class run():
    def checkArray():
        Obj = varArray()
        for i in range(len(Obj.arr1)):
            for x in range(len(Obj.arr2)):
                if (Obj.arr1[i] == Obj.arr2[x]):
                    print(Obj.arr2[x])

class varArray():
    arr1 = [3,4,7]
    arr2 = [1,6,3,8,9]

run.checkArray()
