
import csv

out = open('./new-fixed.csv', 'w', newline='')
csvwriter = csv.writer(out, delimiter=',', quoting=csv.QUOTE_MINIMAL)

with open('fixed.csv') as csvfile:
    rows = csv.reader(csvfile)
    for row in rows:
        row[1] = format(float(row[1]) * 0.87, '.2f')
        row[3] = format(float(row[3]) * 0.453, '.2f')
        csvwriter.writerow(row)
    out.close()
