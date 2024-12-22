import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Array "mo:base/Array";

actor {
 
  public type UserRole = {
    user_Prin:Principal;
    role:Nat64;
  };
  
  var user_role:[UserRole] = [];
  public func GetUserRole(det:UserRole): async Text{
    user_role:=Array.append<UserRole>(user_role , [det]);
    return "OK";
  };

  public shared query func getUserRole(user_Prin:Principal) : async Nat64 {
   var answer = Array.find<UserRole>(user_role , func x = x.user_Prin == user_Prin);
   switch(answer) {
    case(?found){ 
      return found.role 
    };
    case(null){
      return 0 
    };
   };
  }

  

};
