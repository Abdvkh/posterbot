/*CMD
  command: onGitPush
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Git
  answer: Start code importing...
  keyboard: 
  aliases: 
CMD*/

Bot.importGit({
  branch: "master",
  success: "onGitImportCompleted"
});
