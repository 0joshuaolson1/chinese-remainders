solve_nX_equals_d_mod_p=(n,d,p,D=p,t=0,T=1,_)=>{//doesn't support some zero values or full 2**53 range
  for(;d;D=t,t=_){
    _=T
    T=t-(D/d|0)*T
    t=d
    d=D%d
  }
  return(_>0?_:_+p)*n%p
}
recover_from_p_residues_a=(a,p,n,m=1,i)=>{
  for(n=a[i=0];++i<p.length;){
    m*=p[i-1]
    n+=m*f(p[i]+a[i]-n%p[i],m,p[i])
  }
  return n
}

//this isn't GPL'd and doesn't require Node, unlike that OTHER npm lib...
