// var exports;
exports = {
  //doesn't support N = 0
  solveAXBN: function(a,b,n,f=,B=n,t=0,T=1,_){//f= not finished...
    for(;b;B=t,t=_){
      _=T
      T=t-Math.floor(B/b)*T
      t=b
      b=B%b
    }
    return(_>0?_:_+n)*a%n
  },

  fromResidues: function(a,p,n,m=1,i=0){
    for(n=a[i=0];++i<p.length;){
      m*=p[i-1]
      n+=m*f(p[i]+a[i]-n%p[i],m,p[i])
    }
    return n
  },

  test: function(){
    throw 'NOT IMPLEMENTED';
  }
};
