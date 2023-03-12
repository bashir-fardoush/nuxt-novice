export default defineNuxtRouteMiddleware(()=>{
  console.log('Working globally');
  const pageVisit = usePageVisitCount();
  pageVisit.value++;
})