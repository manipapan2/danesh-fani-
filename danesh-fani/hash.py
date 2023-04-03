import random
my_string = "cabad"
separator = "|"


a = ["bdwii2","wdaw83"]
b = ["fkjw84","avrhw5"]
c = ["hf276","bghhe53"]
d = ["fvnt6","hkbirkjd"]
e = ["nyhw3","vfngkt321"]
f = ["bn21","fhrudgaqy"]
g = ["nffk9","2ef3qd"]
h = ["tqaxd94214","62gsvsvd"]
i = ["dwbmj8","axatw73"]
j = ["ngkoifdj4","adasc321"]
k = ["jlyovn582","afhu28"]
l = ["bm834hjd","dnv62gd"]
m = ["acmvbfj8","zxa3y"]
n = ["vmdkgh4782s","gdfgv1"]
o = ["1dd14fa","fsd7ebn"]
p = ["vsaa425g","afafvby7"]
q = ["ngjy42y","vaafqg"]
r = ["vftuklp70","fgrwaz2"]
s = ["lphvza","kiygbt6"]
t = ["axnuyr145","rgvduga2"]
u = ["bbffcbm83","favvd43f"]
v = ["vbnhfdw5","fkjcb3"]
w = ["asdx5d","y6kjv2"]
x = ["bnxjaqo59fk","fvngkgjd8"]
y = ["zzvddrq65hf","vjwhfwj34"]
z = ["afasdfsc3","fgfgcq4"]
sp = ["snvn62d","pvar1da"]



def deciding():
    decide = input("Hash (H) or Dehash(D): ")

    if decide == "H" or decide == "h":
        hashing()
    elif decide == "D" or decide == "d":
        dehashing()
    else:
        deciding()

def hashing():
    hash_value = ""
    inp = input("Enter Your Massage: ")

    ar = random.choice(a)
    br = random.choice(b)
    cr = random.choice(c)
    dr = random.choice(d)
    er = random.choice(e)
    fr = random.choice(f)
    gr = random.choice(g)
    hr = random.choice(h)
    ir = random.choice(i)
    jr = random.choice(j)
    kr = random.choice(k)
    lr = random.choice(l)
    mr = random.choice(m)
    nr = random.choice(n)
    oor = random.choice(o)
    pr = random.choice(p)
    qr = random.choice(q)
    rr = random.choice(r)
    sr = random.choice(s)
    tr = random.choice(t)
    ur = random.choice(u)
    vr = random.choice(v)
    wr = random.choice(w)
    xr = random.choice(x)
    yr = random.choice(y)
    zr = random.choice(z)
    spr = random.choice(sp)

    for char in inp:
        if char == "a":
            hash_value += ar + separator
        elif char == "b":
            hash_value += br + separator
        elif char == "c":
            hash_value += cr + separator
        elif char == "d":
            hash_value += dr + separator
        elif char == "e":
            hash_value += er + separator
        elif char == "f":
            hash_value += fr + separator
        elif char == "g":
            hash_value += gr + separator
        elif char == "h":
            hash_value += hr + separator
        elif char == "i":
            hash_value += ir + separator
        elif char == "j":
            hash_value += jr + separator
        elif char == "k":
            hash_value += kr + separator
        elif char == "l":
            hash_value += lr + separator
        elif char == "m":
            hash_value += mr + separator
        elif char == "n":
            hash_value += nr + separator
        elif char == "o":
            hash_value += oor + separator
        elif char == "p":
            hash_value += pr + separator
        elif char == "q":
            hash_value += qr + separator
        elif char == "r":
            hash_value += rr + separator
        elif char == "s":
            hash_value += sr + separator
        elif char == "t":
            hash_value += tr + separator
        elif char == "u":
            hash_value += ur + separator
        elif char == "v":
            hash_value += vr + separator
        elif char == "w":
            hash_value += wr + separator
        elif char == "x":
            hash_value += xr + separator
        elif char == "y":
            hash_value += yr + separator
        elif char == "z":
            hash_value += zr + separator
        elif char == " ":
            hash_value += spr + separator
        else:
            hash_value += char
    # Remove the final separator
    hash_value = hash_value.replace("|","")
    print(hash_value)
    deciding()
                




def dehashing():

    inp = input("Enter Your Hash: ")

    inp = inp.replace("bdwii2","a")
    inp = inp.replace("wdaw83","a")
    inp = inp.replace("fkjw84","b")
    inp = inp.replace("avrhw5","b")
    inp = inp.replace("hf276","c")
    inp = inp.replace("bghhe53","c")
    inp = inp.replace("nyhw3","e")
    inp = inp.replace("vfngkt321","e")
    inp = inp.replace("fvnt6","d")
    inp = inp.replace("hkbirkjd","d")
    inp = inp.replace("bn21","f")
    inp = inp.replace("fhrudgaqy","f")
    inp = inp.replace("nffk9","g")
    inp = inp.replace("2ef3qd","g")
    inp = inp.replace("tqaxd94214","h")
    inp = inp.replace("62gsvsvd","h")
    inp = inp.replace("dwbmj8","i")
    inp = inp.replace("axatw73","i")
    inp = inp.replace("ngkoifdj4","j")
    inp = inp.replace("adasc321","j")
    inp = inp.replace("jlyovn582","k")
    inp = inp.replace("afhu28","k")
    inp = inp.replace("bm834hjd","l")
    inp = inp.replace("dnv62gd","l")
    inp = inp.replace("acmvbfj8","m")
    inp = inp.replace("zxa3y","m")
    inp = inp.replace("vmdkgh4782s","n")
    inp = inp.replace("gdfgv1","n")
    inp = inp.replace("1dd14fa","o")
    inp = inp.replace("fsd7ebn","o")
    inp = inp.replace("vsaa425g","p")
    inp = inp.replace("afafvby7","p")
    inp = inp.replace("ngjy42y","q")
    inp = inp.replace("vaafqg","q")
    inp = inp.replace("vftuklp70","r")
    inp = inp.replace("fgrwaz2","r")
    inp = inp.replace("lphvza","s")
    inp = inp.replace("kiygbt6","s")
    inp = inp.replace("axnuyr145","t")
    inp = inp.replace("rgvduga2","t")
    inp = inp.replace("bbffcbm83","u")
    inp = inp.replace("favvd43f","u")
    inp = inp.replace("vbnhfdw5","v")
    inp = inp.replace("fkjcb3","v")
    inp = inp.replace("asdx5d","w")
    inp = inp.replace("y6kjv2","w")
    inp = inp.replace("bnxjaqo59fk","x")
    inp = inp.replace("fvngkgjd8","x")
    inp = inp.replace("zzvddrq65hf","y")
    inp = inp.replace("vjwhfwj34","y")
    inp = inp.replace("afasdfsc3","z")
    inp = inp.replace("fgfgcq4","z")
    inp = inp.replace("afasdfsc3","z")
    inp = inp.replace("fgfgcq4","z")
    inp = inp.replace("snvn62d"," ")
    inp = inp.replace("pvar1da"," ")
    inp = inp.replace("snvn62d"," ")
    inp = inp.replace("pvar1da"," ")
    print(inp)
    deciding()

deciding()