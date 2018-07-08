// var exports;
exports = {
  // a,b > 0; b < n; modified from Wikipedia
  solveAXBN: function(a,b,n/*,divmod,...*/,B,t,T,_){
    /*
    divmod=divmod||...
    ...
    */
    for(B=n,t=0,T=1;b;B=t,t=_){
      _=T;
      T=t-Math.floor(B/b)*T;
      t=b;
      b=B%b;
    }
    return(_>0?_:_+n)*a%n;
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

  test: function(){
    throw 'NOT IMPLEMENTED';
  }
};
