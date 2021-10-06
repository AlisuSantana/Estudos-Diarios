# React-Native com expo
 
 ## Explorando Componentes da biblioteca durante estudo
 
![Screenshot_20210624-204506_Expo Go](https://user-images.githubusercontent.com/58946493/124369215-b86af600-dc3f-11eb-8908-b147b5190b5a.png)

![Screenshot_20210624-204546_Expo Go](https://user-images.githubusercontent.com/58946493/124369216-b99c2300-dc3f-11eb-9634-fb3aa4b956a6.png)


### DB -> Código Banco MySQL

                    create database sistemaAluno;

                    create table aluno(
                        cd_rm_aluno  int auto_increments,
                        nm_aluno varchar('30') not null,
                        nm_fone char('14') not null,
                        nm_email varchar('40') unique not null
                            constraint pk_aluno primary key (cd_rm_aluno) 
                    );


