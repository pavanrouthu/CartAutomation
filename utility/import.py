import json
import openpyxl as px

#download latest om catalog from prod
# response = urllib2.urlopen("https://api.melbourneit-aws.com/catalog/om?trackingId=321c4804102e248ae56dce327daf8ca48706af32", timeout = 5)
# content = response.read()
# f = open( "catalog_om_latest.json", 'w' )
# f.write( content )
# f.close()

#load new gtld donut from excel file
W = px.load_workbook('donut.xlsx', use_iterators = True)
p = W.get_sheet_by_name(name = 'Sheet1')

# generate new products catalog
output = []
for row in range(1, p.max_row +1):
    space = p['A' + str(row)].value

    o = {}
    o = {"names" : "null", 
        "domainspace" : str(space), 
        "Yr":"2 Years"
        }
    # o = str(space)

    output.append(o)
    # print o
f = open( "output.json", 'w' )
f.write(json.dumps(output))
f.close()