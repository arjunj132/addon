# addon
A debian-based terminal based on electron + replit. Based upon fake-root on replit.

![Screenshot 2022-10-27 9 55 17 PM](https://user-images.githubusercontent.com/68869672/198451392-ea7b022e-a893-4f93-9563-476b978755d1.png)


A root, colored, lightweight terminal. This terminal is already in root, which is something that the original replit terminal cannot access.


## Install

```bash
git clone https://github.com/arjunj132/addon.git
npm install
npm start
```


## Neofetch info

```bash
       _,met$$$$$gg.          runner@cece4cc27b81 
    ,g$$$$$$$$$$$$$$$P.       ------------------- 
  ,g$$P"     """Y$$.".        OS: Debian GNU/Linux 10 (buster) x86_64 
 ,$$P'              `$$$.     Host: Google Compute Engine 
',$$P       ,ggs.     `$$b:   Kernel: 5.15.0-1021-gcp 
`d$$'     ,$P"'   .    $$$    Uptime: 16 mins 
 $$P      d$'     ,    $$P    Packages: 204 (dpkg) 
 $$:      $$.   -    ,d$$'    Shell: bash 5.0.3 
 $$;      Y$b._   _,d$P'      Terminal: proot 
 Y$$.    `.`"Y$$$$P"'         CPU: AMD EPYC 7B12 (4) @ 2.249GHz 
 `$$b      "-.__              Memory: 4747MiB / 32102MiB 
  `Y$$
   `Y$$.                                              
     `$$b.
       `Y$$b.
          `"Y$b._
              `"""
```


## Clear cache between sessions
This behavior is managed via the file `clearcache.json`. `y` means yes, while `n` means no.
