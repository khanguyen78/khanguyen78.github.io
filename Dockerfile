FROM httpd:2.4
COPY ./ /usr/local/apache2/htdocs/
COPY asset /usr/local/apache2/htdocs/
COPY css /usr/local/apache2/htdocs/
COPY familytree.d.ts /usr/local/apache2/htdocs/
COPY index.html /usr/local/apache2/htdocs/
COPY script.js /usr/local/apache2/htdocs/
COPY FamilyTree.js /usr/local/apache2/htdocs/
COPY -a js /usr/local/apache2/htdocs/
COPY style.css /usr/local/apache2/htdocs/

