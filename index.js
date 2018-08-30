// var exports;
exports = {
  // find X where AX = B (mod N); A,B > 0; B < N; modified from Wikipedia
  solveAXBN: function(A,B,N,zero,one,positive,add,subtract,multiply,divmod){
    zero=zero||0
    one=one||1
    positive=positive||function(n){return n>0}
    add=add||function(a,b){return a+b}
    subtract=subtract||function(l,r){return l-r}
    multiply=multiply||function(a,b){return a*b}
    divmod=divmod||function(n,d){return{div:Math.floor(n/d),mod:n%d}}
    var a=N,b,T=one,t=zero,_,d
    for(;positive(A);b=t,t=_){
      _=T;
      d=divmod(a,A)
      T=subtract(t,mul(d.div,T))
      t=A;
      A=d.mod
    }
    return divmod(mul(positive(_)?_:add(_,N),B),N).mod
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
