---
title: "Family Tree"
description: "cook. eat. enjoy. share."
featured_image: '/images/goicuon.jpg'
menu:
  main:
    weight: 1
---
{{< figure src="/images/goicuon.jpg" title="Xin Chao" >}}
  <script src="./FamilyTree.js"></script>

<script>

    let family = new FamilyTree("#tree", {
        // options
        nodeBinding: {
            field_0: "name"
        },
        nodes: [
            { id: 1, pids: [2], name: "Amber McKenzie", gender: "female" },
            { id: 2, pids: [1], name: "Ava Field", gender: "male" },
            { id: 3, mid: 1, fid: 2, name: "Peter Stevens", gender: "male" }
        ]
    });

</script>




### About me
My name is Megan, and as of the writing of this page, I am a senior in high school here in Fairfax, Virginia. I am also a proud member of the Girl Scouts. For my gold award I decided to start a website about the foods of my culture. Over the years I have been fortunate enough to travel and eat many different foods and I've found that I really love food lol. If you enjoy this site I hope you'll share this with others and share with me any recipes or at the least your favorite dish of any cuisine. Thank you for visiting this site. I hope you enjoy it. 


### About vietcuisines.com
vietcuisines.com is a site to promote and share the dishes of Vietnam. vietcuisines.com is hosted in Github and deployed using Github Pages. vietcuisines.com uses the Hugo framework. The domain is served by Amazon Route53. 
