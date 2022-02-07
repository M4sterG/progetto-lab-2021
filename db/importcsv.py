import re

with open('./catalog.csv') as file:
    reg = ', [0-9]{1,}.[0-9]{2,},'
    lines = file.readlines()
    out = open('./fixed.csv', 'w+')
    i = 0
    for line in lines:
        new = re.split(reg, line)
        pos = re.search(reg, line)
        if i == 586:
            line = line.replace('Electronics,Furniture',
                                '\"Electronics,Furniture\"')
        if pos:
            i += 1
            newline = '"' + new[0] + '"' + line[pos.start():]
            newline = newline.replace(', ', ',')
            out.write(newline)

    file.close()
    out.close()
