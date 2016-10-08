timbitsLeft = int(1)
totalCost = 0

bigBoxes = int(timbitsLeft / 40)
totalCost = totalCost + (bigBoxes * 6.19)
timbitsLeft = timbitsLeft - (40 * bigBoxes)

if timbitsLeft >= 20:
    totalCost = totalCost + 3.39
    timbitsLeft = timbitsLeft - 20

if timbitsLeft >= 10:
    totalCost = totalCost + 1.99
    timbitsLeft = timbitsLeft - 10

totalCost = totalCost + (timbitsLeft * .2)
print(totalCost)

