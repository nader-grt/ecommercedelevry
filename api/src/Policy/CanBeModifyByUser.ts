export default function canModifyUser(actor:any, targetUserId: number) {
    return actor.role === "admin" || actor.role === "ADMIN" || actor.id === targetUserId;
  }
  