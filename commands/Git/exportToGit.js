/*CMD
  command: exportToGit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Git
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.exportGit({
   branch:'master',
   success: 'onGitExportCompleted'
})
