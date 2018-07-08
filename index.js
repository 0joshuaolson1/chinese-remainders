// var exports;
exports = {
  // find X where AX = B (mod N); A,B > 0; B < N; modified from Wikipedia
  solveAXBN: function(A,B,N/*,divmod,...*/,b,T,t,_){
    /*
    divmod=divmod||...
    ...
    */
    for(b=N,t=0,T=1;B;b=t,t=_){
      _=T;
      T=t-Math.floor(b/B)*T;
      t=B;
      B=b%B;
    }
    return(_>0?_:_+N)*A%N;
  },

  fromResidues: function(a,p/*,muladd,divmod,...*/,m,n,i){
    /*
    muladd=muladd||...
    ...
    */
    for(m=1,n=a[i=0];++i<p.length;){
      m*=p[i-1];
      n+=m*this.solveAXBN(p[i]+a[i]-n%p[i],m,p[i]/*,divmod,...*/);
    }
    return n;
  },

  toResidues: function(n,p/*,mod*/){
    return p.map(p=>n%p)
  },

  test: function(){
    throw 'NOT IMPLEMENTED';
  }
};
