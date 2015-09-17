/*
  Responsible for providing an interface to create an archievement.
 */

// dependency achievements.json as ArchivementsDB

function Archievement(id) 
{
  if(typeof id === "number") return new Archievement(ArchievementsDB[id]);
  this.id = id.id, 
  this.desc = id.desc, 
  this.lvl = id.lvl, 
  this.icon = id.icon;
}