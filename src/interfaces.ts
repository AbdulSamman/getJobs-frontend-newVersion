export interface IAppProvider {
  children: React.ReactNode;
}

export interface IAppContext{
    jobs:IJob[];

}


export interface IJob{
    id: number,
    title: string,
    company: string,
    url: string,
    description: string,
    skillList: string,
    publicationDate: string,
    skills:ISkill[],

}

export interface ISkill{
  idCode:string,
  name:string,
  url:string,
  description:string
}



